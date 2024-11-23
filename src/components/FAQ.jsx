import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'What is this website about?',
    answer: 'This website offers courses, coaching, and resources to help you achieve your goals.',
  },
  {
    question: 'How can I enroll?',
    answer: 'You can enroll by clicking the "Enroll Now" button at the top of the page or in the pricing section.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards, PayPal, and other online payment methods.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, we offer a 7-day money-back guarantee on all courses if you are not satisfied.',
  },
];

export default function FAQ() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto w-full max-w-10xl rounded-3xl bg-white shadow-xl p-8 sm:p-10 lg:p-12">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="mt-6">
              {({ open }) => (
                <>
                  <DisclosureButton
                    className={`flex w-full justify-between rounded-xl px-6 py-5 text-left text-lg font-semibold ${
                      open
                        ? 'bg-indigo-100 text-indigo-900'
                        : 'bg-gray-100 text-gray-800'
                    } hover:bg-indigo-200 hover:text-indigo-900 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300`}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-6 w-6 text-indigo-500 transition-transform duration-300`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel
                    className={`${
                      open ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                    } text-gray-700 text-base leading-relaxed transition-all duration-500 ease-in-out mt-4`}
                  >
                    {faq.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
