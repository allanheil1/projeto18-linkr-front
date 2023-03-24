import { ModalStyle, Wrapper } from "./style";

export default function DeleteModal(props) {
    return (
        <Wrapper
            onClick={() => {props.setModalOpen(false)}}
        >
            <ModalStyle onClick={e => e.stopPropagation()}>
                <div>{props.children}</div>
            </ModalStyle>
        </Wrapper>
    )
}