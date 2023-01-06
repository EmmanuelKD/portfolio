import github from "../assets/images/pngs/github.png";
import linkedin from "../assets/images/pngs/linkedin.png";
import stack from "../assets/images/pngs/stack.png";
import upwork from "../assets/images/pngs/upwork.png";
import { LinkType } from "../types";



export enum linkType {
  stackOverflow = 0,
  github = 1,
  linkedIn = 2,
  upwork = 3,
}

interface itemProp {
  img: any;
  url: string,
}
const LinkedBtn: React.FC<itemProp> = (prop) => {
  const { img, url } = prop;

  return (
    <div
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50px",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt="" width="25px" height="25px" />
      </a>
    </div>
  );
};


export const LinkRender: React.FC<LinkType> = (props) => {
  const { name, type, url, imageUrl } = props;


  const LoadIcon = () => {
    switch (Number.parseInt(type)) {
      case linkType.github:
        return <LinkedBtn img={github} url={url} />;
      case linkType.linkedIn:
        return <LinkedBtn img={linkedin} url={url} />;
      case linkType.stackOverflow:
        return <LinkedBtn img={stack} url={url} />;
      case linkType.upwork:
        return <LinkedBtn img={upwork} url={url} />;
      default:
        if (imageUrl)
          return <LinkedBtn img={imageUrl} url={url} />
        else
          return <></>;
    }
  };

  return (
    <div style={{ marginRight: "20px", marginTop: 15, marginBottom: 15 }}>
      {<LoadIcon />}
    </div>
  );
};

const ContactMe: React.FC<{ links: LinkType[] }> = (props) => {

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      {props.links?.map((value, i) => (
        <LinkRender key={i} name={value.name} type={value.type} url={value.url} />
      ))}
    </div>
  );
};

export default ContactMe;
