import Image, { StaticImageData } from "next/image";

type EmphasisProps = {
    children: string;
    href?: string;
    currentTab?: boolean;
    image?: StaticImageData;
};

export default function Emphasis({ children, href, currentTab, image }: EmphasisProps) {
    const content = (
        <>
            {image && (
                <Image
                    className="w-5 inline-block rounded-md mr-1"
                    src={image}
                    alt="Logo"
                    width={200}
                    height={200}
                    loading="eager"
                />
            )}
            {children}
        </>
    );

    if (!href) {
        return <span className="emphasis">{content}</span>;
    }

    return (
        <a
            className="inline-block hover-grow emphasis"
            href={href}
            target={currentTab ? "_self" : "_blank"}
            rel={currentTab ? undefined : "noopener noreferrer"}
        >
            {content}
        </a>
    );
}
