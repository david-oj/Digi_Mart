import SupportAgent from "@/assets/icons/support_agent.svg?react";
import Verified from "@/assets/icons/verified.svg?react";
import Payments from "@/assets/icons/payments.svg?react";
import Footprint from "@/assets/icons/footprint.svg?react";
import Bed from "@/assets/icons/bed.svg?react";
import { facebook, instagram, linkedin, twitter } from "@/assets/icons";
import {
  MdOutlineSmartphone,
  MdOutlineLaptopMac,
  MdOutlineHeadphones,
  MdOutlineWatch,
  MdOutlineMan,
  MdOutlineWoman,
  MdOutlineArrowForward,
} from "react-icons/md";
import {
  fashionImg3,
  home_decor,
  beauty,
  electronics,
  smartwatch,
  headphone,
  fragrance,
  appleStore,
  googleStore,
  customer1,
  customer2,
  customer3,
} from "@/assets";

export const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Shop",
    href: "#",
  },
  {
    label: "Vendors",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

export const featureCards = [
  {
    id: "vendors",
    title: "Verified Vendors",
    description:
      "All vendors go through a strict verification process to ensure quality and authenticity.",
    Icon: Verified,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "payments",
    title: "Secure Payments",
    description:
      "Multiple payment options with advanced security systems to keep your transactions safe.",
    Icon: Payments,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Our customer support team is available round the clock to assist you with any issues.",
    Icon: SupportAgent,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export const categories = [
  {
    title: "Smartphones",
    Icon: MdOutlineSmartphone,
    iconColor: "text-purple-600",
  },
  {
    title: "Laptops",
    Icon: MdOutlineLaptopMac,
    iconColor: "text-blue-600",
  },
  {
    title: "Accesories",
    Icon: MdOutlineHeadphones,
    iconColor: "text-green-600",
  },
  {
    title: "Wearables",
    Icon: MdOutlineWatch,
    iconColor: "text-pink-600",
  },
  {
    title: "Men's",
    Icon: MdOutlineMan,
    iconColor: "text-indigo-600",
  },
  {
    title: "Women's",
    Icon: MdOutlineWoman,
    iconColor: "text-red-600",
  },
  {
    title: "Shoes",
    Icon: Footprint,
    iconColor: "text-amber-600",
  },
  {
    title: "Furniture",
    Icon: Bed,
    iconColor: "text-teal-600",
  },
];

export const popularCategories = [
  {
    title: "Fashion",
    description: "Latest trends and styles",
    img: fashionImg3,
    Icon: MdOutlineArrowForward,
    products: "300+ Products",
    productsColor: "bg-purple-600/80",
  },

  {
    title: "Electronics",
    description: "Latest gadgets and tech",
    img: electronics,
    Icon: MdOutlineArrowForward,
    products: "250+ Products",
    productsColor: "bg-blue-600/80",
  },

  {
    title: "Home & Decor",
    description: "Make your space beautiful",
    img: home_decor,
    Icon: MdOutlineArrowForward,
    products: "180+ Products",
    productsColor: "bg-green-600/80",
  },

  {
    title: "Beauty & Health",
    description: "Self-care and more",
    img: beauty,
    Icon: MdOutlineArrowForward,
    products: "220+ Products",
    productsColor: "bg-pink-600/80",
  },
];

export const deals = [
  {
    title: "Premium Headphones",
    discount: "-30% OFF",
    discountPrice: "$69.99",
    price: "$99.99",
    img: headphone,
    Icon: MdOutlineArrowForward,
    highlight: "Limited Time",
    highlightColor: "bg-purple-600/80",
  },

  {
    title: "Smart Watch Pro",
    discount: "-25% OFF",
    discountPrice: "$149.99",
    price: "$199.99",
    img: smartwatch,
    Icon: MdOutlineArrowForward,
    highlight: "Trending",
    highlightColor: "bg-blue-600/80",
  },

  {
    title: "Luxury Fragrance",
    discount: "-40% OFF",
    discountPrice: "$59.99",
    price: "$99.99",
    img: fragrance,
    Icon: MdOutlineArrowForward,
    highlight: "Best Seller",
    highlightColor: "bg-pink-600/80",
  },
];

export const customerReviews = [
  {
    name: "Sarah Williams",
    image: customer1,
    text: "I was always skeptical about multi-vendor platforms, but DigiMart exceeded my expectations. The variety of products and vendors is impressive, and the shipping was faster than expected!",
    rating: 5,
  },
  {
    name: "Oreofe John",
    image: customer2,
    text: "Great selection of premium fashion brands all in one place. Customer service was responsive when I had an issue with one order. Could improve the search filters.",
    rating: 4,
  },
  {
    name: "Michael Peterson",
    image: customer3,
    text: "As a busy mom, I love that I can shop from multiple vendors in one checkout. The rewards program is great too - I've already earned enough points for free shipping on my next order!",
    rating: 4.5,
  },
]

export const companyInfo = [
  {
    description:
      "The one-stop marketplace for all your shopping needs with verified vendors and secure payments.",
    socialIcons: [
      { icon: facebook, href: "https://facebook.com", alt: "Facebook_logo" },
      { icon: twitter, href: "https://twitter.com", alt: "Twitter_logo" },
      { icon: instagram, href: "https://instagram.com", alt: "Instagram_logo" },
      { icon: linkedin, href: "https://linkedin.com", alt: "LinkedIn_logo" },
    ],
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Categories", href: "/categories" },
      { label: "Deals", href: "/deals" },
      { label: "New Arrivals", href: "/new-arrivals" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Download Our App",
    description:
      "Shop on the go with our mobile app and get exclusive app-only offers.",
    images: [
      {
        alt: "Google Play Store",
        src: googleStore, 
        href: "#",
      },
      {
        alt: "apple Store",
        src: appleStore, 
        href: "#",
      },
    ],
  },
];

export const bottomLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
];