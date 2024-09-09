import React,{ useState } from 'react'

export default function MainPage() {
    const [date, setDate] = useState(null);
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourseCurrency, setAmountInSourseCurrency] = useState(0);
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies</h1>
        <p className='lg:mx-32 opacity-40 py-6'>
            Welcome to "Convert Your Currencies Today"! This application allows you
            to easily convert currencies based on the latest exchange rates. Whether
            you're planning a trip, managing your finances, or simply curious about
            the value of your money in different currencies, this tool is here to
            help.
        </p>
        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='w-full lg:w-1/2'>
                <form>
                    <div className='mb-4'>
                        <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="Date" id="date" name='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" required />
                    </div>
                </form>
            </section>
        </div>
        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='ww-full lg:w-1/2'>
                <form>
                    <div className='mb-4'>
                        <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name={sourceCurrency} id={sourceCurrency} value={sourceCurrency}>
                            <option value=''>Select source currency</option>
                        </select>
                    </div>
                </form>
            </section>
        </div>
        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='ww-full lg:w-1/2'>
                <form>
                <div className='mb-4'>
                        <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name={targetCurrency} id={targetCurrency} value={targetCurrency}>
                            <option value=''>Select target currency</option>
                        </select>
                    </div>
                </form>
            </section>
        </div>
        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='ww-full lg:w-1/2'>
                <form>
                    <div className='mb-4'>
                    <label htmlFor={amountInSourseCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
                    <input type="number" id={amountInSourseCurrency} name={amountInSourseCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Amount in source currency" required />
                    </div>
                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'> Get the target Currency</button>
                </form>
            </section>
        </div>
    </div>
  )
}
