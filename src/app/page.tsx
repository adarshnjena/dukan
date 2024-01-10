import { DropdownMenuDemo } from "@/components/lastMonth";
import Sidebar from "@/components/sidebar";
import TableComp from "@/components/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <div className="w-full">
        <div className=" h-[60px] w-full bg-white flex items-center justify-between p-[30px] border border-x-0">
          <div className="flex text-center justify-center">
            <p className="text-[#1A181E] font-normal text-[15px] items-start">
              Payments
            </p>
            <p className="text-[#1A181E] font-thin text-[12px] ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="mr-1"
              >
                <g clip-path="url(#clip0_14772_2522)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14772_2522">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              How it works
            </p>
          </div>

          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ]">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[500px] p-2 ps-10 text-sm text-gray-900 text-[15px] border-none rounded-[5px] bg-[#F2F2F2] focus:border-none focus:ring-0"
                placeholder="Search features, tutorials, etc."
                required
              />
            </div>
          </form>
          <div className="flex">
            {" "}
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F2F2F2] rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_14772_2537)">
                <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                <path
                  d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z"
                  fill="#4D4D4D"
                />
              </g>
              <defs>
                <clipPath id="clip0_14772_2537">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <main className="flex flex-col items-center justify-center flex-1 w-full bg-[#FAFAFA] p-[30px]">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="text-[#1A181E] font-medium text-[20px] items-start">
              Overview
            </p>
            <DropdownMenuDemo />
          </div>
          <div className="flex items-center justify-between  w-full mb-6">
            <div className="bg-white w-[49%] py-[20px] px-8 shadow-sm rounded-[6px]">
              <p className="text-[#1A181E] font-normal text-[16px] items-start">
                Online orders
              </p>
              <p className="text-[#1A181E] font-medium text-[32px] items-start mt-4">
                231
              </p>
            </div>
            <div className="bg-white w-[49%] py-[20px] px-8 shadow-sm rounded-[6px]">
              <p className="text-[#1A181E] font-normal text-[16px] items-start">
                Amount received{" "}
              </p>
              <p className="text-[#1A181E] font-medium text-[32px] items-start mt-4">
                ₹23,92,312.19
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  w-full mb-8  rounded-[4px]">
            <p className="text-[#1A181E] font-medium text-[20px] items-start mt-4">
              Transactions | This Month
            </p>
          </div>

          <div className="pb-10 w-full bg-white shadow-sm rounded-[6px]">
            <div className="flex justify-between items-center my-4 mx-2">
              <div>
                <form>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ]">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-[200px] p-2 ps-10 text-sm text-gray-900 text-[15px] border border-[#999999] rounded-[5px] "
                      placeholder="Search by order ID..."
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="flex justify-between items-center">
                <Button className="text-[#1A181E] font-normal text-[16px] border rounded-[4px] flex justify-between items-center mr-4">
                  Sort{" "}
                  <svg
                    className="ml-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </Button>
                <Button className="text-[#1A181E] font-normal text-[16px] border rounded-[4px] flex justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="m-2">
              <TableComp />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
