import {Button, Card, Form} from "antd";
import {Activity} from "../../../app/models/activity";
import React, {
    ChangeEvent,
    useState
} from 'react'
import { useStore } from "../../../app/stores/store";

interface Props {
    createOrEdit: (activity: Activity) => void;
    submitting :boolean;
}

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};
export default function ActivityForm({createOrEdit,submitting}: Props) {
    const {activityStore} = useStore();
    const {selectedActivity,closeForm} = activityStore;
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }
    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
        console.log(activity)
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }
    return (
        <Card style={{maxWidth: 320}}>
            <form onSubmit={handleSubmit} 
                  style={{maxWidth: 400}}
                  autoComplete="off">
                <br />
                <label htmlFor="title">Title</label>
                <br />
                <input name="title" value={activity.title} onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <textarea name="description" value={activity.description} onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="category">Category</label>
                <br />
                <input name="category" value={activity.category} onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="date">Date</label>
                 <br />
                <input name="date" type='date' value={activity.date} onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="city">City</label>
                <br />
                <input name="city" value={activity.city} onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="venue">Venue</label>
                <br />
                <input name="venue" value={activity.venue} onChange={handleInputChange} />
                <br />
                <br />
                <Form.Item {...tailLayout}>
                    <Button loading={submitting} type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={closeForm} htmlType="button">
                        Cancel
                    </Button>
                </Form.Item>
                <br />
            </form>
        </Card>
    )
}

