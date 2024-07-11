import { Box, Link, Text, Flex, Spacer, IconButton, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import the icons
import { Icon } from "@chakra-ui/icons";
import { FiMail, FiPhone } from "react-icons/fi"; // Import Chakra UI icons

const Contactus = () => {
    const contactBoxStyles = {
        width: "362px",
        margin: "auto",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        transition: "transform 0.2s, box-shadow 0.2s",
        _hover: {
            transform: "scale(1.02)",
            boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
        },
        marginTop: "44px",
        marginBottom: "25px"
    };

    const labelStyles = {
        fontWeight: "bold",
        textAlign: "center"

    };

    const iconStyles = {
        boxSize: 8,
        color: "blue.500",
    };

    const linkStyles = {
        color: "blue.500",
        textDecoration: "none",
        _hover: {
            color: "blue.600",
        },
    };

    return (
        <>

            <Box style={contactBoxStyles} id='contact' >
                <Text style={labelStyles} fontSize="2xl" mb={4}>
                    Contact Me
                </Text>
                <Flex alignItems="center" mt={3}>
                    <Tooltip label="GitHub" hasArrow placement="top">
                        <IconButton
                            as={Link}
                            href="https://github.com/lokeshchoudharyprogrammer"
                            id="contact-github"
                            style={linkStyles}
                            icon={<FaGithub style={iconStyles} />}
                            aria-label="GitHub"
                            target="_blank"
                        />
                    </Tooltip>
                    <Spacer />
                    <Link href="https://github.com/lokeshchoudharyprogrammer" target="_blank" id="contact-github" style={linkStyles}>
                        Lokesh Choudhary
                    </Link>
                </Flex>
                <Flex alignItems="center" mt={3}>
                    <Tooltip label="LinkedIn" hasArrow placement="top">
                        <IconButton
                            as={Link}
                            href="https://www.linkedin.com/in/lokeshchoudharyprogrammer/"
                            id="contact-linkedin"
                            style={linkStyles}
                            icon={<FaLinkedin style={iconStyles} />}
                            aria-label="LinkedIn"
                            target="_blank"
                        />
                    </Tooltip>
                    <Spacer />
                    <Link href="https://www.linkedin.com/in/lokeshchoudharyprogrammer/" target="_blank" id="contact-linkedin" style={linkStyles}>
                        Lokesh Choudhary
                    </Link>
                </Flex>
                <Flex alignItems="center" mt={3}>
                    <Tooltip label="Phone" hasArrow placement="top">
                        <IconButton
                            as={Link}
                            href="tel:+916377300329"
                            id="contact-phone"
                            style={linkStyles}
                            icon={<FiPhone style={iconStyles} />}
                            aria-label="phone"
                        />
                    </Tooltip>
                    <Spacer />
                    <Link href="tel:+916377300329" id="contact-phone" style={linkStyles}>
                        +916377300329
                    </Link>
                </Flex>
                <Flex alignItems="center" mt={3}>
                    <Tooltip label="Email" hasArrow placement="top">
                        <IconButton
                            as={Link}
                            href="mailto:lokeshchoudhary2026@gmail.com"
                            id="contact-email"
                            style={linkStyles}
                            icon={<FiMail style={iconStyles} />}
                            aria-label="Email"
                        />
                    </Tooltip>
                    <Spacer />
                    <Link href="mailto:lokeshchoudhary2026@gmail.com" id="contact-email" style={linkStyles}>
                        lokeshchoudhary2026@gmail.com
                    </Link>
                </Flex>

            </Box>
        </>
    )
}

export default Contactus