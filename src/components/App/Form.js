import React, {Component, PropTypes} from 'react';


class Form extends Component {
    render() {
        return (
            <form {...this.props}>
                {this.props.children}
            </form>
        )
    }
}

Form.propTypes = {
    method: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
};


class FromInput extends Component {
    defaultProps = {
        type: 'text'
    };

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type="text" name={this.props.name} className="form-control" placeholder={this.props.label} value={this.props.value}/>
            </div>
        );
    }
}

FromInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Form;

export const FromInputField = FromInput;