import Image, { StaticImageData } from "next/image";
import { icons } from "../../utils";
import s from "./Skills.module.scss";
import {Next, Tailwind} from "../ui/index";
import GraphQL from "../ui/GraphQLLogo";

const Skills = () => {
	return (
		<section id="skills" className={s.skills}>
			<h2 className={s.skills__heading}>My Skills</h2>
            <h3 className={`${s['skills__sub-heading']}`}>Some of the common tools I use in my workflow</h3>
			<div className={s.skills__row}>
				{icons.map((icon: StaticImageData, index: number) => {
					return (
						<Image
							key={index}
							className={s.skills__icon}
							src={icon}
							alt="icon"
						/>
					);
				})}
				<Next className="skills__icon"/>
				<Tailwind className="skills__icon" />
				<GraphQL className="skills__icon" fill="#e10098" />
			</div>
		</section>
	);
};

export default Skills;