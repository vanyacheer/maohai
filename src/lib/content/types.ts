export type Product = {
  slug: string;
  name: string;
  label: string;
  image: string;
  rent: number;
  noise: string;
  license: string;
  sourceUrl: string;
  description: string;
  highlights: string[];
};

export type Faq = { category: string; question: string; answer: string };
export type BlogPost = { slug: string; category: string; readTime: string; title: string; excerpt: string; date: string };

export type SiteContent = {
  contact: { phone: string; phoneHref: string; line: string; lineHref: string; email: string; address: string; hours: string };
  products: Product[];
  commonSpecs: Array<[string, string]>;
  faqs: Faq[];
  blogPosts: BlogPost[];
};
