import './Styles/Button.css';

export const Button = ({ children, ...props }) => {
    const { selected } = props;
    return selected ? (<button className="buttonSelected">{children}</button>) :
                      (<button className="button">{children}</button>);
}