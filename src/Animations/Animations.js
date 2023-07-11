const animations = {
    // from top to bottom
    "fade-in-spring":{
            hidden: { opacity: 0, y: "100%" },
            visible: { opacity: 1, y: 0, transition: { type: "spring" } },
    },
    "fade-in-left":{
            hidden: { opacity: 0, x: "-100%" },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    },
    "opacity-0-to-opacity-100":{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
    }
}

export default animations;