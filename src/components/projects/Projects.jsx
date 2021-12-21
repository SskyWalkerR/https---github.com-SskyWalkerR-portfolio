import React from "react";
import {
    Container,
    Heading,
    Project,
    Item,
    Wrapper,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Button,
    OverLay,
    ButtonContainer,
} from "./style";
import movieFlix from "../../img/movie.jpg";
import { SiGithub } from "react-icons/si";

const Projects = () => {
    return (
        <Container id="projects">
            <Wrapper>
                <Heading>Projects</Heading>
                <Project>
                    <Item>
                        <ImageContainer>
                            <Image src={movieFlix} />
                            {/* <OverLay></OverLay> */}
                        </ImageContainer>
                        <InfoContainer>
                            <Title>MovieFlix App</Title>
                            <Desc>
                                An API powered application where you can find the information about
                                the movies and Tv shows.
                            </Desc>
                            <ButtonContainer>
                                <a
                                    href="https://github.com/SskyWalkerR/movieflix"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button>
                                        View Project <SiGithub style={{ marginLeft: "10px" }} />
                                    </Button>
                                </a>
                                <a
                                    href="https://movieflix-react.netlify.app/"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button>Visit Site</Button>
                                </a>
                            </ButtonContainer>
                        </InfoContainer>
                    </Item>
                </Project>
            </Wrapper>
        </Container>
    );
};

export default Projects;
