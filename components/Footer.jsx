import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" mt-8">
      <div class="flex items-center bg-[#808080] w-screen ">
        <div class="container ml-auto mr-auto flex flex-wrap items-start">
          <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 class="text-3xl lg:text-4xl text-white font-extrabold">
              We Offer
            </h1>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img src="/bike.png" alt="" class="h-64 ml-auto mr-auto" />
              </figure>
              <div class="rounded-lg p-4 bg-[#f50d01] flex flex-col">
                <div>
                  <h5 class="text-white text-2xl font-bold leading-none">
                    Fast Delivery
                  </h5>
                  <span class="text-xs text-white leading-none">
                    LitBatt24 provides Fast Delivery service. if you want your
                    product faster, you can opt for next day delivery..
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img src="/cash.png" alt="" class="h-64 ml-auto mr-auto" />
              </figure>
              <div class="rounded-lg p-4 bg-[#f50d01] flex flex-col">
                <div>
                  <h5 class="text-white text-2xl font-bold leading-none">
                    Cash On Delivery
                  </h5>
                  <span class="text-xs text-white leading-none">
                    Cash on Delivery is available as a payment method for all
                    items that are Fulfilled by LitBatt24{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img src="/return.png" alt="" class="h-64 ml-auto mr-auto" />
              </figure>
              <div class="rounded-lg p-4 bg-[#f50d01] flex flex-col">
                <div>
                  <h5 class="text-white text-2xl font-bold leading-none">
                    Easy Returns
                  </h5>
                  <span class="text-xs text-white leading-none">
                    You may request returns for most items you buy from
                    LitBatt24, except those that are explicitly identified as
                    not returnable.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img src="/download.png" alt="" class="h-64 ml-auto mr-auto" />
              </figure>
              <div class="rounded-lg p-4 bg-[#f50d01] flex flex-col">
                <div>
                  <h5 class="text-white text-2xl font-bold leading-none">
                    Best Service
                  </h5>
                  <span class="text-xs text-white leading-none">
                    We at Littbat24 we offer the best service and we also prides
                    ourself for offering a comprehensive selection of quality
                    LiFePO4 batteries to our customers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                    href="/battery/24volt"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    24v batteries{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="/battery/48volt"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    48v batteries{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="/battery/512volt"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    512v batteries{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="/battery/380volt"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
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
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    Todays deal
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={"/battery/newproduct"}
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    New Products
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href={"/battery/offers"}
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    Offers{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">About</h5>
              <ul class="list-none footer-links">
                <li class="mb-2"></li>
                <li class="mb-2">
                  <a
                    href="/policy"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    Locations
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="/policy"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    Privacy
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="/policy"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
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
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    Support
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
                  >
                    Help Center
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-[#f50d01] hover:text-[#f50d01]"
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
              <button class="px-4 py-2 bg-[#f50d01] hover:bg-purple-900 rounded text-white">
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
