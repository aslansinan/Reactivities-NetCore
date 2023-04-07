import {Button, Card, Form} from "antd";
import {Activity} from "../../../app/models/activity";
import React, {
    ChangeEvent,
    useState
} from 'react'
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};
export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const {selectedActivity,closeForm, createActivity, updateActivity, loading} = activityStore;
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
      activity.id ? updateActivity(activity) : createActivity(activity);
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
                    <Button loading={loading} type="primary" htmlType="submit">
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
})

