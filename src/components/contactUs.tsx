

import ContactForm from "./ContactForm"

const ContactUs = () => {

    return (
        <div className='lg:px-20 px-5 lg:my-24 my-8'>
            <div className="flex flex-wrap gap-y-4">
                <div className="lg:w-1/2 w-full">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-0.5 bg-[#F15625]"></div>
                        <span className='uppercase text-[#F15625] font-[Outfit-SemiBold]'>Contact Us</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <h2 className='text-5xl font-[Outfit-Bold] my-5 max-w-lg'>We’re Just a message away!</h2>
                    </div>
                    <p className='text-[#00000099] text-xl max-w-2xl '>We’re here to support building material yards  and always open to new suppliers and manufacturers who want to sell in bulk.</p>
                    <div className="mt-16 flex gap-x-3">
                        <img src="/icons/whatsapp-icon.svg" alt="" />
                        <div>
                            <h6 className="text-xl font-[Outfit-Medium] text-[#222222]">Chat with us on WhatsApp</h6>
                            <a className="text-xl text-[#5C90EB]" href="mailto:hello@scaleksa.com">hello@scaleksa.com</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export default ContactUs