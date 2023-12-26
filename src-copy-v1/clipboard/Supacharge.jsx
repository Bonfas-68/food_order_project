import React from 'react';

export default function Supacharge() {
  return (
    <section>
      <div className="section-container my-20">
        <h3>SuperCharge Your wor flow</h3>
        <p className="section-content mb-16">
          We've got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
          <div className="flex flex-col items-center space-y-5">
            <img src="/images/icon-blacklist.svg" alt="" className="mb-6" />
            <h5>Create Blacklist</h5>
            <p className="max-w-md text-grayishBlue">Easily search your snippets by content, category, web address,
              application, and more.</p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="/images/icon-text.svg" alt="" className="mb-6" />
            <h5>Plain Text Snippets</h5>
            <p className="max-w-md text-grayishBlue">Remove unwanted formatting from copied text for a consistent look.</p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="/images/icon-preview.svg" alt="" className="mb-6" />
            <h5>Sneak Preview</h5>
            <p className="max-w-md text-grayishBlue"> Quick preview of all snippets on your Clipboard for easy access.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
