import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" mt-8">
      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How Long is this site live?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I migrate to another site?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I change the domain you give me?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How many sites I can create at once?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl font-bold mb-6">Volts</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    24v batteries{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    48v batteries{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    512v batteries{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    380v batteries{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 class="text-xl font-bold mb-6">Deals</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href={"/battery/todaydeal"}
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Todays deal
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={"/battery/newproduct"}
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    New Products
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={"/battery/offers"}
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Offers{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">About</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">Help</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div class="flex sm:justify-center xl:justify-start">
                <a
                  href=""
                  class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href=""
                  class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href=""
                  class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i class="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div class="sm:w-full px-4 md:w-1/6">
              <strong>Contact email</strong>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 class="font-bold mb-2">Address</h6>
              <address class="not-italic mb-4 text-sm">
                123 6th St.
                <br />
                Melbourne, FL 32904
              </address>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 class="font-bold mb-2">About Us </h6>
              <p class="mb-4 text-sm">
                LitBatt24 prides itself for offering a comprehensive selection
                of quality LiFePO4 batteries to our customers.
              </p>
            </div>
            <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <button class="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
