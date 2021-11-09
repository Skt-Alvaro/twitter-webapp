import React from "react";
import styled from "styled-components";
import GoogleIcon from "../../icons/GoogleIcon";

export default function GoogleButton({ renderProps }: any) {
    return (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <GoogleIcon width={20} marginRight={8} />
            Registrarse con Google
        </Button>
    );
}

const Button = styled.button`
    align-items: center;
    padding: 10px 56px;
    border-radius: 20px;
    border: 0px;
    display: flex;
    color: #4b4f52;
    margin-top: 25px;
    cursor: pointer;
`;
