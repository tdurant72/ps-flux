import React from 'react';
import TextInput from './common/TextInput';
import PropTypes from "prop-types";
const CourseForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                label="Title"
                id="title"
                name="title"
                onChange={props.onChange}
                value={props.course.title}
                error={props.errors.title}

            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        name="authorId"
                        id="author"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        className="form-control">
                        <option value="" />>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.errors.authorId && (<div className="alert alert-danger">{props.errors.authorId}</div>)}
            </div>

            <TextInput
                label="Category"
                id="category"
                name="category"
                onChange={props.onChange}
                value={props.course.category}
                error={props.errors.category}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}
CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
export default CourseForm;