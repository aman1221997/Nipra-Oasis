import { Component, OnInit } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  selectedCategory: string = 'all';

  categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'water', name: 'Water Supply', icon: '💧' },
    { id: 'pizza', name: 'Pizza Delivery', icon: '🍕' },
    { id: 'order', name: 'Orders & Payment', icon: '💳' },
    { id: 'delivery', name: 'Delivery', icon: '🚚' }
  ];

  faqs: FAQ[] = [
    // Water Supply FAQs
    {
      question: 'What sizes of water jars do you offer?',
      answer: 'We offer multiple jar sizes to suit your needs: 20 Litre Jar, 20 Litre Jar with Dispenser, 18 Litre Jar, 18 Litre Jar with Dispenser, and 15 Litre Thermas Jar. All jars are thoroughly washed, sanitized, sealed, and delivered in hygienic condition.',
      category: 'water',
      isOpen: false
    },
    {
      question: 'How is the water purified?',
      answer: 'Our water goes through a comprehensive purification process including filtration, UV treatment, and quality checks to ensure freshness and safety in every jar. We maintain strict hygiene standards throughout the process.',
      category: 'water',
      isOpen: false
    },
    {
      question: 'What are the subscription plans available?',
      answer: 'We offer flexible subscription plans with great savings: Regular (₹20/L), 1 Month (₹19/L), 2 Months (₹18/L), 3 Months (₹17/L), 6 Months (₹15/L), and 1 Year (₹12/L). The longer your subscription, the more you save!',
      category: 'water',
      isOpen: false
    },
    {
      question: 'Can I purchase water jars and accessories separately?',
      answer: 'Yes! We sell 20L bottles (₹150), 18L bottles (₹140), 15L Thermas jars (₹550), dispensers (₹125), taps (₹30), TDS meters (₹300), and combo packs (₹200).',
      category: 'water',
      isOpen: false
    },
    {
      question: 'How often will water be delivered?',
      answer: 'Delivery frequency depends on your subscription plan and consumption. You can schedule regular deliveries or order on-demand through our order form. We ensure timely doorstep delivery.',
      category: 'water',
      isOpen: false
    },

    // Pizza FAQs
    {
      question: 'What pizza sizes are available?',
      answer: 'We offer three sizes for both Basic and Premium Cheesy pizzas: Small, Medium, and Large. Basic pizzas start at ₹89 (Small), ₹109 (Medium), and ₹139 (Large). Premium Cheesy pizzas are ₹149 (Small), ₹189 (Medium), and ₹239 (Large).',
      category: 'pizza',
      isOpen: false
    },
    {
      question: 'How long does pizza delivery take?',
      answer: 'Every pizza is prepared fresh after ordering and delivered within 40 minutes, so you enjoy it hot, fresh, and full of flavor.',
      category: 'pizza',
      isOpen: false
    },
    {
      question: 'What ingredients do you use?',
      answer: 'We use quality ingredients, rich sauces, and perfectly baked crusts. Our pizzas are made with fresh vegetables, premium cheese, and authentic spices to ensure consistent taste and quality.',
      category: 'pizza',
      isOpen: false
    },
    {
      question: 'Can I customize my pizza?',
      answer: 'Currently, we offer Basic and Premium Cheesy pizza options. For special customization requests, please contact us at +91 98213 97833 or through WhatsApp.',
      category: 'pizza',
      isOpen: false
    },
    {
      question: 'Do you offer any combo deals?',
      answer: 'We regularly update our offerings. For current combo deals and special offers, please check our order form or contact us directly.',
      category: 'pizza',
      isOpen: false
    },

    // Orders & Payment FAQs
    {
      question: 'How do I place an order?',
      answer: 'You can place orders through our online order form (click "Order Now" button on the website), call us at +91 98213 97833, or message us on WhatsApp. We make ordering simple and convenient.',
      category: 'order',
      isOpen: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including cash on delivery, UPI, online bank transfer, and digital wallets. Choose the method most convenient for you.',
      category: 'order',
      isOpen: false
    },
    {
      question: 'Can I cancel or modify my order?',
      answer: 'Yes, you can cancel or modify your order before it is dispatched. Please contact us immediately at +91 98213 97833 or via WhatsApp to make changes.',
      category: 'order',
      isOpen: false
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We strive for 100% customer satisfaction. If you face any issues with your order, please contact us immediately. We will resolve the issue or provide appropriate compensation based on our refund policy.',
      category: 'order',
      isOpen: false
    },

    // Delivery FAQs
    {
      question: 'What areas do you deliver to?',
      answer: 'We provide doorstep delivery service in our operational areas. Please contact us at +91 98213 97833 to confirm if we deliver to your location.',
      category: 'delivery',
      isOpen: false
    },
    {
      question: 'Is there a minimum order value?',
      answer: 'Minimum order requirements may vary by product and location. Please check our order form or contact us for specific details.',
      category: 'delivery',
      isOpen: false
    },
    {
      question: 'Do you charge delivery fees?',
      answer: 'Delivery charges may apply based on your location and order value. Please check during order placement or contact us for details.',
      category: 'delivery',
      isOpen: false
    },
    {
      question: 'What if I\'m not home during delivery?',
      answer: 'Please provide delivery instructions when placing your order. You can also reschedule delivery by contacting us. We aim to be flexible with delivery timings.',
      category: 'delivery',
      isOpen: false
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is dispatched, you can track it by contacting us at +91 98213 97833 or via WhatsApp. We keep you updated on your order status.',
      category: 'delivery',
      isOpen: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleFaq(faq: FAQ): void {
    faq.isOpen = !faq.isOpen;
  }

  filterByCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  get filteredFaqs(): FAQ[] {
    if (this.selectedCategory === 'all') {
      return this.faqs;
    }
    return this.faqs.filter(faq => faq.category === this.selectedCategory);
  }
}
