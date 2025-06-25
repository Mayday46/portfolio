import { motion } from 'framer-motion';

const Mytimeline = [
    {
        //
        company: "Queens College",
        date: "2024",
        title: "Computer Science Degree",
        description: [
            "First in my family to graduate with a CS degree to make my parents proud"
        ],
        dotColor: "bg-blue-500"
    },
    {
        company: "Chase Bank",
        date: "2023",
        title: "Associate Banker",
        description: [
            "Provided customer service and financial solutions as an Associate Banker"
        ],
        dotColor: "bg-green-500"
    },
    {
        company: "Chase Bank",
        date: "Present",
        title: "Associate Banker-ME",
        description: [
            "Promoted to Associate Banker-ME, focusing on customer engagement and financial services"
        ],
        dotColor: "bg-amber-500"
    },
    {
        company: "Self-Study",
        date: "Present",
        title: "Fullstack Developer Student",
        description: [
            "Studying full-time to stay current with latest technologies and frameworks"
        ],
        dotColor: "bg-purple-500"
    }
];

const CareerTimelineData = [
    {
        title: "Timeline",
        content: (
            <div className = "space-y-4 mb-8">
                {
                    // [{
                    //     company: "Queens College",
                    //     date: "2024",
                    //     title: "Computer Science Degree",
                    //     description: [
                    //         "First in my family to graduate with a CS degree to make my parents proud"
                    //     ],
                    //     dotColor: "bg-blue-500"
                    // },
                    // {
                    //     company: "Chase Bank",
                    //     date: "2023",
                    //     title: "Associate Banker",
                    //     description: [
                    //         "Provided customer service and financial solutions as an Associate Banker"
                    //     ],
                    //     dotColor: "bg-green-500"
                    // },
                    // {
                    //     company: "Chase Bank",
                    //     date: "Present",
                    //     title: "Associate Banker-ME",
                    //     description: [
                    //         "Promoted to Associate Banker-ME, focusing on customer engagement and financial services"
                    //     ],
                    //     dotColor: "bg-amber-500"
                    // },
                    // {
                    //     company: "Self-Study",
                    //     date: "Present",
                    //     title: "Fullstack Developer Student",
                    //     description: [
                    //         "Studying full-time to stay current with latest technologies and frameworks"
                    //     ],
                    //     dotColor: "bg-purple-500"
                    // }]

                Mytimeline.map((item) => (
                    <div key = {item.company + item.data} className = "relative">
                        <div
                            // This renders the placement for each dot.
                            // -left-[20px] is used to position the dot to the left of the text.
                            // top-[10px] is used to position the dot vertically.
                            className = {`absolute -left-[20px] top-[10px] w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
                        />
                        <motion.div
                            className = "group py-1 transition-colors"
                            whileHover = {{ scale: 1.05 }}
                            style = {{ transformOrigin: 'left' }}
                        >
                            <div className = "flex flex-col sm:flex-row sm:justify-between sm:items-start" >
                                <p className ="font-medium">{item.company}</p>
                                <p className ="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                            </div>
                            <p className ="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                            <ul className ="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                                {item.description.map((description, index) => (
                                    <li key = { index }> {description} </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        )
    }

]

export default CareerTimelineData;