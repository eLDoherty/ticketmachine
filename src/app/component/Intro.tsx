import "../styles/components/intro.scss";
import thumbnail1 from "../../../public/images/concert1.jpg";
import thumbnail2 from "../../../public/images/concert2.jpg";
import Image from "next/image";

type Intro = {
    heading: string
}

export default function Intro(Intro : Intro) {
  return (
    <div className="tm-intro">
      <h2>{Intro.heading}</h2>
      <div className="tm-card-container">
        <div className="card">
            <Image 
                src={thumbnail1} 
                alt="Concert Image"  
                className="concert-image" 
            />
          <h3>Concert Gate II</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non accumsan urna.</p>
        </div>
        <div className="card">
            <Image 
                src={thumbnail2} 
                alt="Concert Image"  
                className="concert-image" 
            />
          <h3>Concert Gate III</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non accumsan urna.</p>
        </div>
      </div>
    </div>
  );
}
