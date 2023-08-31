import { useState } from "react"
import emailjs from "emailjs-com"

function useContactFormLogic() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateId = "template_ns5b4l6"
        const userId = "ABkzQsFlUhuA_j_q3"
        
        const templateParams = {
            to_name: "Tahta",
            from_name: formData.name,
            from_email: formData.email,
            from_message: formData.message
        }

        emailjs.send('default_service', templateId, templateParams, userId)
            .then(() => {
                alert('Email sent successfully!')
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch ((error) => {
                console.error('Error sending email:', error)
                alert('Failed to send email. Please try again.')
            })
    }
    
    return { formData, handleChange, handleSubmit }
}

export default useContactFormLogic