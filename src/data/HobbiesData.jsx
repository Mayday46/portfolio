import { motion } from "framer-motion";

const hobbies = [
    {
        title: "Photography",
        description: "Capturing moments and landscapes through the lens.",
        stats: "100+ good looking photos taken (approved by my girlfriend)",
        color: "green"
    },

    {
        title: "Real Estate Investing",
        description: "Playing monopoly but with real money.",
        stats: "0 properties",
        color: "blue"
    },

    {
        title: "Mechanical Keyboard Building",
        description: "Building custom mechanical keyboards for a satisfying typing experience.",
        stats: "1 keyboard built",
        color: "purple"
    },

    {
        title: "Stock Crypto investing",
        description: "Buy high, sell low is always my way of contributing to the economy.",
        stats: "0.01% return on investment",
        color: "red"
    }
]

const colorClasses = {
    green: "text-green-500 dark:text-green-500",
    blue: "text-blue-500 dark:text-blue-500",
    purple: "text-purple-500 dark:text-purple-500",
    red: "text-red-500 dark:text-red-500"
};

const HobbiesData = [{
    title: "Hobbies",
    content: (
        <div className = "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {
                hobbies.map((hobby) => (
                    <motion.div
                        key = {hobby.title}
                        className = "group py-1 transition-colors"
                        whileHover = {{ scale: 1.05 }}
                    >
                        <div>
                            <h3 className = {`font-medium`}>
                                {hobby.title}
                            </h3>
                            <p className = "text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {hobby.description}
                            </p>
                            <p className = {`text-xs ${colorClasses[hobby.color]} mt-2 font-medium`}>
                                {hobby.stats}
                            </p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}]

export default HobbiesData;