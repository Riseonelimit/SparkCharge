import React from 'react'

const Footer = () => {
  return (
    
<footer class="bg-zinc-800  w-full ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between gap-10">
          <div class="mb-6 md:mb-0">
              <a class="flex items-center">
                  <span class="self-center text-3xl font-semibold poppins whitespace-nowrap text-violet-400">SparkCharge</span>
              </a>
              <p className=' mt-4 md:mt-16 text-xl text-white'>New Building,<br />Modern College of Arts, Science and Commerce,ShivajiNagar. <br /> Pune, Maharashtra 411005</p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-lg text-violet-400 poppins font-semibold uppercase ">Certificates</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline  hover:text-white duration-300">EV Certificate</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline hover:text-white duration-300">Scalability Certificate</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline hover:text-white duration-300">Sample Certificate</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6  text-lg text-violet-400 poppins font-semibold uppercase">Important Links</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline hover:text-white duration-300">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline hover:text-white duration-300">Support And Help</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">SparkCharge™</a> All Right Reserved.


          </span>
      </div>
    </div>
</footer>

  )
}

export default Footer