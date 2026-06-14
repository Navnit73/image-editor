import { SeoPage } from '../lib/types/seo';

export const enPages: SeoPage[] = [
  {
    slug: 'photo-resizer',
    metaTitle: 'Free Online Photo Resizer | Resize Images Instantly',
    metaDescription: 'Resize your photos online for free. Fast, secure, and maintains image quality.',
    h1: 'Online Photo Resizer',
    showTool: 'photo-editor',
    subtitle: 'Quickly change image dimensions without losing quality.',
    sections: [
      {
        heading: 'Why use our resizer?',
        content: 'It is incredibly fast and runs entirely in your browser for maximum privacy.'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, completely free.'
      }
    ]
  },
  {
    slug: 'passport-photo-maker',
    metaTitle: 'Passport Photo Maker | Create Passport Photos Online',
    metaDescription: 'Create compliant passport photos online in seconds. Official dimensions and auto background removal.',
    h1: 'Passport Photo Maker',
    showTool: 'passport-maker',
    subtitle: 'Easily crop and format your photos for official documents.',
    sections: [
      {
        heading: 'Strict Compliance',
        content: 'We adhere to the strict 35x45mm digital requirements for most international passports.'
      }
    ],
    faq: [
      {
        question: 'What are the dimensions?',
        answer: 'The standard dimensions are 35x45 mm.'
      }
    ]
  },
  {
    slug: 'how-to-use',
    metaTitle: 'How to Use | Image Editor Studio',
    metaDescription: 'Learn how to use our free online image tools.',
    h1: 'How to Use',
    sections: [
      {
        heading: 'Getting Started',
        content: `<div class="grid md:grid-cols-2 gap-6 mt-6 not-prose">
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
    </div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Upload Image</h3>
    <p class="text-slate-600 dark:text-slate-400">Select your image file and drag it into the upload area.</p>
  </div>
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
    </div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Adjust Settings</h3>
    <p class="text-slate-600 dark:text-slate-400">Use the right sidebar to change dimensions, remove background, or adjust colors.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'contact',
    metaTitle: 'Contact Us | Image Editor Studio',
    metaDescription: 'Get in touch with our team for support or inquiries.',
    h1: 'Contact Us',
    sections: [
      {
        heading: 'Reach Out',
        content: `<div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center not-prose mt-6">
  <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
  </div>
  <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Get in Touch</h3>
  <p class="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">We typically respond to all support requests within 24-48 hours. Please include your issue details.</p>
  <a href="mailto:support@example.com" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
    support@example.com
  </a>
</div>`
      }
    ]
  },
  {
    slug: 'terms',
    metaTitle: 'Terms & Conditions | Image Editor Studio',
    metaDescription: 'Read the terms and conditions for using our services.',
    h1: 'Terms & Conditions',
    sections: [
      {
        heading: 'Usage Terms',
        content: `<div class="space-y-6 mt-6 not-prose">
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">1</span>
      Acceptance of Terms
    </h3>
    <p class="text-slate-600 dark:text-slate-400 ml-10">By accessing and using Image Editor Studio, you accept and agree to be bound by the terms and provision of this agreement.</p>
  </div>
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">2</span>
      Service Availability
    </h3>
    <p class="text-slate-600 dark:text-slate-400 ml-10">Our tools are provided "as is" and "as available". We reserve the right to modify, suspend, or discontinue the service at any time.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'privacy',
    metaTitle: 'Privacy Policy | Image Editor Studio',
    metaDescription: 'Our privacy policy detailing how we handle your data.',
    h1: 'Privacy Policy',
    sections: [
      {
        heading: 'Data Protection',
        content: `<div class="space-y-6 mt-6 not-prose">
  <div class="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-xl">
    <h3 class="text-lg font-bold text-green-900 dark:text-green-400 mb-2 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z"/></svg>
      100% Local Processing
    </h3>
    <p class="text-green-800 dark:text-green-300/80">All image manipulation and background removal happens securely within your local browser. <strong>Your images are never uploaded to any server.</strong></p>
  </div>
  <div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl">
    <h3 class="text-lg font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      No Data Collection
    </h3>
    <p class="text-blue-800 dark:text-blue-300/80">We do not track, collect, or store any personal information or image data. There are no tracking cookies related to your media files.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'image-resizer',
    metaTitle: 'Image Resizer | Image Editor Studio',
    metaDescription: 'Free online tool for image resizer. Fast, secure, and right in your browser.',
    h1: 'Image Resizer',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Image Resizer',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our image resizer tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-image-in-kb',
    metaTitle: 'Resize Image In Kb | Image Editor Studio',
    metaDescription: 'Free online tool for resize image in kb. Fast, secure, and right in your browser.',
    h1: 'Resize Image In Kb',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Image In Kb',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize image in kb tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-image-to-20kb',
    metaTitle: 'Resize Image To 20kb | Image Editor Studio',
    metaDescription: 'Free online tool for resize image to 20kb. Fast, secure, and right in your browser.',
    h1: 'Resize Image To 20kb',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Image To 20kb',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize image to 20kb tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-image-to-50kb',
    metaTitle: 'Resize Image To 50kb | Image Editor Studio',
    metaDescription: 'Free online tool for resize image to 50kb. Fast, secure, and right in your browser.',
    h1: 'Resize Image To 50kb',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Image To 50kb',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize image to 50kb tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-image-to-100kb',
    metaTitle: 'Resize Image To 100kb | Image Editor Studio',
    metaDescription: 'Free online tool for resize image to 100kb. Fast, secure, and right in your browser.',
    h1: 'Resize Image To 100kb',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Image To 100kb',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize image to 100kb tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-image-to-200kb',
    metaTitle: 'Resize Image To 200kb | Image Editor Studio',
    metaDescription: 'Free online tool for resize image to 200kb. Fast, secure, and right in your browser.',
    h1: 'Resize Image To 200kb',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Image To 200kb',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize image to 200kb tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-jpg',
    metaTitle: 'Resize Jpg | Image Editor Studio',
    metaDescription: 'Free online tool for resize jpg. Fast, secure, and right in your browser.',
    h1: 'Resize Jpg',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Jpg',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize jpg tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-jpeg',
    metaTitle: 'Resize Jpeg | Image Editor Studio',
    metaDescription: 'Free online tool for resize jpeg. Fast, secure, and right in your browser.',
    h1: 'Resize Jpeg',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Jpeg',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize jpeg tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'gif-resizer',
    metaTitle: 'Gif Resizer | Image Editor Studio',
    metaDescription: 'Free online tool for gif resizer. Fast, secure, and right in your browser.',
    h1: 'Gif Resizer',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Gif Resizer',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our gif resizer tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'animated-gif-resizer',
    metaTitle: 'Animated Gif Resizer | Image Editor Studio',
    metaDescription: 'Free online tool for animated gif resizer. Fast, secure, and right in your browser.',
    h1: 'Animated Gif Resizer',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Animated Gif Resizer',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our animated gif resizer tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'resize-signature',
    metaTitle: 'Resize Signature | Image Editor Studio',
    metaDescription: 'Free online tool for resize signature. Fast, secure, and right in your browser.',
    h1: 'Resize Signature',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Resize Signature',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our resize signature tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'passport-photo-size-maker',
    metaTitle: 'Passport Photo Size Maker | Image Editor Studio',
    metaDescription: 'Free online tool for passport photo size maker. Fast, secure, and right in your browser.',
    h1: 'Passport Photo Size Maker',
    subtitle: 'Quickly process your images online.',
    showTool: 'passport-maker',
    sections: [
      {
        heading: 'About Passport Photo Size Maker',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our passport photo size maker tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'pan-card-photo-resizer',
    metaTitle: 'Pan Card Photo Resizer | Image Editor Studio',
    metaDescription: 'Free online tool for pan card photo resizer. Fast, secure, and right in your browser.',
    h1: 'Pan Card Photo Resizer',
    subtitle: 'Quickly process your images online.',
    showTool: 'passport-maker',
    sections: [
      {
        heading: 'About Pan Card Photo Resizer',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our pan card photo resizer tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'change-image-size-in-cm',
    metaTitle: 'Change Image Size In Cm | Image Editor Studio',
    metaDescription: 'Free online tool for change image size in cm. Fast, secure, and right in your browser.',
    h1: 'Change Image Size In Cm',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Change Image Size In Cm',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our change image size in cm tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'increase-image-size',
    metaTitle: 'Increase Image Size | Image Editor Studio',
    metaDescription: 'Free online tool for increase image size. Fast, secure, and right in your browser.',
    h1: 'Increase Image Size',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Increase Image Size',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our increase image size tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'reduce-image-size',
    metaTitle: 'Reduce Image Size | Image Editor Studio',
    metaDescription: 'Free online tool for reduce image size. Fast, secure, and right in your browser.',
    h1: 'Reduce Image Size',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Reduce Image Size',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our reduce image size tool is completely free to use.'
      }
    ]
  },
  {
    slug: 'image-resizer-mb',
    metaTitle: 'Image Resizer Mb | Image Editor Studio',
    metaDescription: 'Free online tool for image resizer mb. Fast, secure, and right in your browser.',
    h1: 'Image Resizer Mb',
    subtitle: 'Quickly process your images online.',
    showTool: 'photo-editor',
    sections: [
      {
        heading: 'About Image Resizer Mb',
        content: '<div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"><p class="text-slate-600 dark:text-slate-400">Use our free online tool to efficiently handle your image processing needs. All operations are performed securely within your browser to ensure maximum privacy.</p></div>'
      }
    ],
    faq: [
      {
        question: 'Is it free?',
        answer: 'Yes, our image resizer mb tool is completely free to use.'
      }
    ]
  },
];
