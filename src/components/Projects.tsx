import React from 'react';
import Project from './Project';
import ProjectSection from './ProjectSection';
import ImageOverflow from '../images/project-overflow.png';
import ImageColorbook from '../images/project-colorbook.png';
import ImageBlossom from '../images/project-blossom.png';
import ImageCarpo from '../images/project-carpo.svg';
import ImageFigicons from '../images/project-figicons.png';

export default function Projects() {
    return (
        <div className="container flex-column">
            <ProjectSection title="Professional work" className="mb6" />
            <Project
                title="Overflow"
                description="The world's first user flow diagramming tool tailored for designers, integrating with Figma, Sketch &amp; Adobe XD."
                mode="dark"
                project="overflow"
                image={ImageOverflow}
            />
            <Project
                title="Carpo"
                description="The first fully featured design system, created for the Overflow ecosystem."
                mode="light"
                project="carpo"
                image={ImageCarpo}
            />

            <div className="mt12">
                <ProjectSection title="Self-made work" className="mb6 mt6" />
            </div>
            <Project
                title="Figicons"
                description="Beautiful, customizable React SVG icons, based on a 24px grid. Completely open source, MIT licensed and designed in Figma."
                mode="light"
                project="figicons"
                image={ImageFigicons}
            />
            <Project
                title="The Colorbook"
                description="A timeline of the trendiest color palettes from Dribbble, as seen on Product Hunt."
                mode="dark"
                project="colorbook"
                image={ImageColorbook}
            />
            <Project
                title="Minicons"
                description="Over 85+ aesthetic SVG icons designed on a 24x24 grid, swapped dynamically via observers or programmatically the API."
                mode="light"
                project="minicons"
            />
            <Project
                title="Blossom"
                description="A simply beautiful, themeable design framework built from the ground up in Stylus with performance in mind."
                mode="light"
                project="blossom"
                image={ImageBlossom}
            />
        </div>
    );
}
