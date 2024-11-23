import { Disclosure } from '@headlessui/react';
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
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto w-full max-w-4xl rounded-3xl bg-white shadow-xl p-6 sm:p-8 lg:p-10">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="mt-4">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between rounded-xl px-5 py-4 text-left text-lg font-medium ${
                      open
                        ? 'bg-indigo-100 text-indigo-900'
                        : 'bg-gray-100 text-gray-800'
                    } hover:bg-indigo-200 hover:text-indigo-900 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300`}
                  >
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-6 w-6 text-indigo-500 transition-transform duration-300`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className="px-6 pt-4 pb-2 text-gray-700 text-base leading-relaxed transition-all duration-500 ease-in-out"
                  >
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>                
    </div>
  );
}
