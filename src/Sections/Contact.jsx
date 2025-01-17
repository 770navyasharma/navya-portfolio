import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = ({ target: { name, value }}) => {
    setForm({
        ...form,[name]: value
    })
  }



  //service_p1vazmc
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
        await emailjs.send('service_p1vazmc', 'template_yicbhir', {
            from_name :form.name,
            to_name : 'Navya Sharma',
            from_email : form.email,
            to_email: 'navyasav06@gmail.com',
            message: form.message,
        },
        'I7zY5T-pZ73VdW-8B')
        setLoading(false);
        alert('Email sent successfully!');
        setForm({
            name: '',
            email: '',
            message: '',
        })
    } catch (error) {
        setLoading(false);
        console.log(error);
        alert('Failed to send the email. Please try again later.');
    }
    
  }
  return (
    <section className='c-space my-20' id='contact'>
        <h3 className='head-text'>Contact Me</h3>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal-background" className='absolute inset-0 min-h-screen'/>
            <div className='contact-container'>
                <h3 className='head-text'>
                    Let's Talk
                </h3>
                <p className='text-lg text-white-600 mt-3'>
                    Have an idea or opportunity? Let’s bring it to life—get in touch!
                </p>
                <form action="" ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>
                            Full Name
                        </span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required className='field-input' placeholder='John Doe'/>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>
                            E-mail
                        </span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required className='field-input' placeholder='johndoe@gmail.com'/>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>
                            Your Message
                        </span>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder='Hi, I wanna give you a job ...'></textarea>
                    </label>

                    <button type="submit" className='field-btn' disabled={loading}>
                        {
                            loading? 'Sending...' : 'Send Message'
                        }
                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact