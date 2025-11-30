
import Link from 'next/link';
import Image from 'next/image';

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* SideNavBar */}
      <aside className="w-64 flex-shrink-0 bg-white hidden lg:flex flex-col justify-between p-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_330)">
                  <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold">Admin Portal</h2>
          </div>
          <div className="flex flex-col gap-2">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p className="text-sm font-medium">Orders</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
              <span className="material-symbols-outlined">style</span>
              <p className="text-sm font-medium">Products</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Customers</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
              <span className="material-symbols-outlined">bar_chart</span>
              <p className="text-sm font-medium">Analytics</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-200 pt-4">
          <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Settings</p>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Logout</p>
          </Link>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white px-6 py-3 sticky top-0 z-10">
          <div className="flex items-center gap-8">
            <button className="lg:hidden text-[#111418]">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#617589] flex bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined !text-2xl">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] h-full placeholder:text-[#617589] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" defaultValue=""/>
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent hover:bg-gray-100 text-[#111418]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3">
              <Image className="bg-center bg-no-repeat aspect-square bg-cover rounded-full" alt="Admin user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFcJEZXTrMA3dbfVVRIOZ2Cw116xay0vt0jm0hlluO6lkP3wqnXBTWNITJ6_83IFgiexPpvCpEQtqroaLz_5tgV6InVGesqEOl2iXNKtJUBqMdf_R33A8ViY8mSUl0V_RX3lKPu3Ch79HSqtAXFwuglLAHGz2KtNAzz5g1UilZu4pjYInr8We4PUO3rgDkt5BTPcQbpQJfM-D-oMFojt5EbVgEMsmQPFUpyx8YFxwaxquktLmbhoHiK0xO6HbeG6qdw9zIDYaoteAl" width={40} height={40}/>
              <div className="hidden md:flex flex-col">
                <h1 className="text-[#111418] text-base font-medium leading-normal">Alex Grim</h1>
                <p className="text-[#617589] text-sm font-normal leading-normal">Administrator</p>
              </div>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">Dashboard</h1>
              <p className="text-[#617589] text-base font-normal leading-normal">Welcome back, Alex! Here&apos;s a summary of your store&apos;s activity.</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
              <span className="material-symbols-outlined !text-xl">add</span>
              <span className="truncate">Add New Product</span>
            </button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <p className="text-[#111418] text-base font-medium leading-normal">Today&apos;s Revenue</p>
              <p className="text-[#111418] tracking-light text-3xl font-bold leading-tight">$1,250.00</p>
              <p className="text-positive text-sm font-medium leading-normal">+5.2% from yesterday</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <p className="text-[#111418] text-base font-medium leading-normal">New Orders</p>
              <p className="text-[#111418] tracking-light text-3xl font-bold leading-tight">32</p>
              <p className="text-positive text-sm font-medium leading-normal">+10% from yesterday</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <p className="text-[#111418] text-base font-medium leading-normal">Pending Shipments</p>
              <p className="text-[#111418] tracking-light text-3xl font-bold leading-tight">15</p>
              <p className="text-negative text-sm font-medium leading-normal">-2% from yesterday</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <p className="text-[#111418] text-base font-medium leading-normal">Total Customers</p>
              <p className="text-[#111418] tracking-light text-3xl font-bold leading-tight">857</p>
              <p className="text-positive text-sm font-medium leading-normal">+1.5% this month</p>
            </div>
          </div>
          {/* Tabular Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-[#111418]">Recent Orders</h3>
                <a className="text-sm font-bold text-primary hover:underline" href="#">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-3 text-sm font-semibold text-[#617589]">Order ID</th>
                      <th className="py-2 px-3 text-sm font-semibold text-[#617589]">Customer</th>
                      <th className="py-2 px-3 text-sm font-semibold text-[#617589]">Status</th>
                      <th className="py-2 px-3 text-sm font-semibold text-[#617589] text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium">#12548</td>
                      <td className="py-3 px-3 text-sm text-[#111418]">Jane Cooper</td>
                      <td className="py-3 px-3 text-sm"><span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Shipped</span></td>
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium text-right">$89.90</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium">#12547</td>
                      <td className="py-3 px-3 text-sm text-[#111418]">Cody Fisher</td>
                      <td className="py-3 px-3 text-sm"><span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium text-right">$45.50</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium">#12546</td>
                      <td className="py-3 px-3 text-sm text-[#111418]">Robert Fox</td>
                      <td className="py-3 px-3 text-sm"><span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Shipped</span></td>
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium text-right">$120.00</td>
                    </tr>
                    <tr className="hover:bg-gray-50 cursor-pointer">
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium">#12545</td>
                      <td className="py-3 px-3 text-sm text-[#111418]">Kristin Watson</td>
                      <td className="py-3 px-3 text-sm"><span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Cancelled</span></td>
                      <td className="py-3 px-3 text-sm text-[#111418] font-medium text-right">$64.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Low Stock Items */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-[#111418]">Low Stock Items</h3>
                <a className="text-sm font-bold text-primary hover:underline" href="#">Manage Inventory</a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 hover:bg-gray-50 p-2 -m-2 rounded-lg cursor-pointer">
                  <Image className="w-12 h-12 rounded-lg object-cover flex-shrink-0" alt="White t-shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_yprTnHzmR1JMmCc5U6r9SuDAFB1INw-9TqIqNVMhUiiH4hRzpUTM5k1iO_iWE843FrwkuNfux5QT6RwlJeoWP6A9JUQOlQ2euDS4FaVN12_dlAe94BaBFWC0QjAqRKjh7utkziu4TG8TWvnP1S5Gb5_IdD9GEcmFD87Th_85pe0NUrcCqqYZ9L18WTS6zgPHWKJj5I9epwjnLelGjuEo06LXEpAwd0UcHC2lP2wu20OHuNEdDl5F7SGGyTkybjwLqWsJlG-he4uT" width={48} height={48}/>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-[#111418]">Classic White Tee</p>
                    <p className="text-xs text-[#617589]">SKU: CWT-M-WH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-warning">8</p>
                    <p className="text-xs text-[#617589]">in stock</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:bg-gray-50 p-2 -m-2 rounded-lg cursor-pointer">
                  <Image className="w-12 h-12 rounded-lg object-cover flex-shrink-0" alt="Black t-shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPj4bWHeAWhblcC4-jCM5CHj9AnM2cxscWiTjuhbrdejOVSHRmAQyhK4MFtPYJXYgLcE3Rdf4QeoQYvfvyRKRxLeBL1VaHgT1jcuEP6GcQzWVUPkl7qoYBO9Dgbvbcg8DR-yHVXsIy9Mo6n2DX1xYs_jIul9lddgDLvAQHZSuHAggCoL4wQgQBPy4sdrsTRWPolHleLfcYG2x3EyKNImRo0ZeFFZdu_a02psE2j6_X59Z4NTn5xo5BPG2kNfw1oZMvaEQoQnVysRZw" width={48} height={48}/>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-[#111418]">Essential Black Tee</p>
                    <p className="text-xs text-[#617589]">SKU: EBT-L-BL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-warning">5</p>
                    <p className="text-xs text-[#617589]">in stock</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:bg-gray-50 p-2 -m-2 rounded-lg cursor-pointer">
                  <Image className="w-12 h-12 rounded-lg object-cover flex-shrink-0" alt="Gray t-shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXj5dW_2TQWUtUMMNW5i25sp_VzZvz9Fb06jUDQQPyqHcWKUqlqHN1teB5Uhln-qOvodOcJgMHqBVd7T1_pl22h672O4b_cKphzCe8-nV4I7ZizcjUyx2K-ctclySju_3WXD9T-H-aK6seTPFwitsjkNWMBnvhzuadJBNwBpF7-XKx0vo1u4EwqeDZtfCl89u2RSugNVbNcSuLAtsQY3_AgOf3tFrRKPH_7F3GWFUGbMlwfFo6ale7-MvPMt7nBTHdWPLUWSzydWj5" width={48} height={48}/>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-[#111418]">Heather Gray Crew</p>
                    <p className="text-xs text-[#617589]">SKU: HGC-S-GR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-negative">2</p>
                    <p className="text-xs text-[#617589]">in stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

