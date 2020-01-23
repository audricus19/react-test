import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import { createStructuredSelector } from 'reselect';
import { Form, Input, Button, Typography } from 'antd';

import { Box, InlineIcon } from '../styled';
import { UserType } from '../../types';
import { profileSelector } from '../../store/selectors';
import './UserEdit.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserEditFormProps = {
  profile: UserType,
};

function UserEditForm (props: UserEditFormProps) {
  const { handleSubmit, control, watch, errors } = useForm<FormData>();

  useEffect(() => {
    console.log('Errors: ', errors);
  }, [errors]);

  const onSubmit = handleSubmit((formData) => {
    alert(JSON.stringify(formData, null, 4));
  });

  return (
    <>
      <Box>
        <Form className="edit-form" onSubmit={onSubmit}>
          <Form.Item>
            <Controller
              as={<Input prefix={<InlineIcon type="user" />} />}
              name="firstName"
              control={control}
              rules={{
                required: "First name is required",
                max: {
                  value: 15,
                  message: "Not exceed 15"
                }
              }}
              placeholder="First name"
              defaultValue={props.profile.firstName}
            />
            <ErrorMessage as={<Typography.Text type="danger" />} errors={errors} name="firstName" />
          </Form.Item>
          <Form.Item>
            <Controller
              as={<Input prefix={<InlineIcon type="user" />} />}
              name="lastName"
              control={control}
              rules={{
                required: "Last name is required",
                max: {
                  value: 15,
                  message: "Not exceed 15"
                }
              }}
              placeholder="Last name"
              defaultValue={props.profile.lastName}
            />
            <ErrorMessage as={<Typography.Text type="danger" />} errors={errors} name="lastName" />
          </Form.Item>
          <Form.Item>
            <Controller
              as={<Input type="email" prefix={<InlineIcon type="home" />} />}
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                max: {
                  value: 60,
                  message: "Not exceed 60"
                }
              }}
              placeholder="Email"
              defaultValue={props.profile.email}
            />
            <ErrorMessage as={<Typography.Text type="danger" />} errors={errors} name="email" />
          </Form.Item>
          <Form.Item>
            <Controller
              as={<Input type="password" prefix={<InlineIcon type="lock" />} />}
              name="password"
              control={control}
              placeholder="Password"
              defaultValue=""
            />
          </Form.Item>
          <Form.Item>
            <Controller
              as={<Input type="password" prefix={<InlineIcon type="lock" />} />}
              name="confirmPassword"
              control={control}
              rules={{
                validate: (value) => value === watch('password') || 'The password do not match'
              }}
              placeholder="Confirm password"
              defaultValue=""
            />
            <ErrorMessage as={<Typography.Text type="danger" />} errors={errors} name="confirmPassword" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="edit-form__button">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </>
  );
}

UserEditForm.defaultProps = {
  profile: {
    firstName: '',
    lastName: '',
    email: '',
  },
};

const mapStateToProps = createStructuredSelector<any, any>({
  profile: profileSelector,
});

export default connect(mapStateToProps, null)(UserEditForm);
