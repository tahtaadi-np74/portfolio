import Card from "../components/Card"

function Project() {
    return (
        <section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10 py-10">
                <Card 
                    name="duamobil"
                    description="Web that helps users in the process of buying and selling used cars"
                    url="https://www.duamobil.com"
                    owner="Client"
                    tech={["Laravel", "PHP"]}
                />
                <Card 
                    name="volta"
                    description="Web that provides trial services in the UTBK SBMPTN process"
                    url=""
                    owner="Client"
                    tech={["Laravel", "PHP"]}
                />
                <Card 
                    name="Resident Registration"
                    description="A web that helps in the process of registering resident in an area"
                    url=""
                    owner="Client"
                    tech={["Laravel", "PHP"]}
                />
                <Card 
                    name="Camera Rental Booking"
                    description="Web that helps in the camera rental booking process"
                    url=""
                    owner="Client"
                    tech={["PHP"]}
                />
                <Card 
                    name="Stock Management"
                    description="Web that helps manage stock at cake shops"
                    url=""
                    owner="Client"
                    tech={["PHP"]}
                />
                <Card 
                    name="DSS Employee Assessment"
                    description="Web that helps in the process of determining the best employee performance appraisal"
                    url=""
                    owner="Personal"
                    tech={["PHP"]}
                />
            </div>
        </section>
    )
}

export default Project