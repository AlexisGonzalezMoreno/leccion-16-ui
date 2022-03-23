import Boton from "../components/Boton";

export default {
    title: "Botón",
    component: Boton
};

//export const BotonMUI = () => <Boton text="Hola mundo" color="primary" />

const Template = args => <Button {...args} />

export const Principal = Template.bind({});
Principal.args = {
    color: "principal",
    text: "hola"
};

export const Secundario = Template.bind({});
Secundario.args = {
    color: "secondary",
    text: "secundario"
};