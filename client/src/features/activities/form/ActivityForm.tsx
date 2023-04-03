import {Button, Card, DatePicker, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import {Activity} from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void
}

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};
export default function ActivityForm({activity,closeForm}:Props) {
    return (
        <Card style={{maxWidth: 320}}>
            <Form name="basic"
                  labelCol={{span: 8}}
                  wrapperCol={{span: 16}}
                  style={{maxWidth: 400}}
                  initialValues={{remember: true}}
                  autoComplete="off">
                <Form.Item label="Title"
                           name="Title">
                    <Input/>
                </Form.Item>
                <Form.Item label="Description"
                           name="Description">
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item label="Category"
                           name="Category">
                    <Input/>
                </Form.Item>
                <Form.Item label="Date"
                           name="Date">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="City"
                           name="City">
                    <Input/>
                </Form.Item>
                <Form.Item label="Venue"
                           name="Venue">
                    <Input/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={closeForm} htmlType="button">
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}