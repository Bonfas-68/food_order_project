import React from 'react';
import Features from './Features';
import Snippets from './Snippets';
import Supacharge from './Supacharge';

export default function Clipboard() {
  return (
    <section id="hero">
      <div className="section-container px-10 py-16">
        <img src="/images/logo.svg" alt="" className="mx-auto my-16" />
        <h3>A history of everything you copy</h3>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="button-container">
          <a
            href="#"
            className="rounded-full bg-strongCyan p-4 px-7 shadow-lg hover:opacity-90"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="rounded-full bg-lightBlue p-4 px-7 shadow-lg hover:opacity-90"
          >
            Download for mac
          </a>
        </div>
      </div>
      <Features />
      <Snippets />
      <Supacharge />
      {/* references */}
      <div id="references">
        <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row  md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </div>
      <section>
        <div className="section-container my-20">
          <h3>Clipboard for iOS and Mac OS</h3>
          <p className="section-content mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div className="button-container">
            <a
              href="#"
              className="rounded-full bg-strongCyan p-4 px-7 shadow-lg hover:opacity-90"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="rounded-full bg-lightBlue p-4 px-7 shadow-lg hover:opacity-90"
            >
              Download for mac
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src="images/logo.svg" alt="" className="scale-50" />
            <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
              {/* Menu  */}
              <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* Menu 2 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>
              {/* Social */}
              <div className="flex w-32 justify-between py-1">
                <a href="#">
                  <img
                    src="images/icon-facebook.svg"
                    alt=""
                    className="ficon duration-300"
                  />
                </a>
                <a href="#">
                  <img
                    src="images/icon-twitter.svg"
                    alt=""
                    className="ficon duration-300"
                  />
                </a>
                <a href="#">
                  <img
                    src="images/icon-instagram.svg"
                    alt=""
                    className="ficon duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
