import React from "react";
import landingBackground from "../../assets/landingBackground.jpg";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import TwitterIcon from "../../icons/TwitterIcon";
import { MAIN_GRAY } from "../../constants/index";
import GoogleLogin from "react-google-login";
import GoogleButton from "../../components/utils/GoogleButton";

export default function Landing() {
    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    console.log(googleClientId);

    const responseGoogle = (response: any) => {
        console.log(response);
    };

    return (
        <Container>
            <LeftSideContainer>
                <TwitterIcon fill="#fff" width="57%" />
            </LeftSideContainer>
            <RightSideContainer>
                <FaTwitter
                    size={43}
                    color={MAIN_GRAY}
                    style={{ marginLeft: 37, marginTop: 37 }}
                />
                <RightSideTextContainer>
                    <RightSideBigText size={65} width={85}>
                        Lo que está pasando ahora
                    </RightSideBigText>
                    <RightSideBigText size={33} mt={35}>
                        Únete a Twitter hoy mismo.
                    </RightSideBigText>
                    <GoogleLogin
                        clientId={googleClientId as string}
                        render={(renderProps) => (
                            <GoogleButton renderProps={renderProps} />
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                </RightSideTextContainer>
            </RightSideContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

const LeftSideContainer = styled.div`
    position: relative;
    background-image: url(${landingBackground});
    background-repeat: no-repeat;
    background-size: cover;
    height: ${window.innerHeight}px;
    max-width: 210px;
    display: flex;
    justify-content: center;
`;

const RightSideContainer = styled.div`
    background-color: #000;
    width: auto;
`;

const RightSideTextContainer = styled.div`
    margin: 60px 0px 0px 35px;
`;

const RightSideBigText = styled.h1.attrs((props: any) => props)`
    color: ${MAIN_GRAY};
    font-size: ${(props: any) => props.size}px;
    margin-top: ${(props: any) => props.mt && props.mt}px;
    width: ${(props: any) => props.width && props.width}%;
`;
