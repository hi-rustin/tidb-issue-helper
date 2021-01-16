import * as React from "react";
import { Form, Row, Col, Input, Select } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";
import mysqlVersion from "./data/mysql.json";

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

interface Props {
  versions: string[];
}

const BugForm: React.FC<Props> = ({ versions }) => (
  <div>
    {/* ==================================== Environment ==================================== */}
    <Form.Item>
      <Row>
        <Col span={11}>
          {/* TiDB version */}
          <FormItem
            name="version"
            label={
              <FormattedMessage id="issue.version" defaultMessage="Version" />
            }
            help={
              <FormattedMessage
                id="issue.versionHelp"
                defaultMessage="Check if the issue is reproducible with the latest stable version."
              />
            }
          >
            <Select showSearch={true}>
              {versions.map(version => (
                <Option key={version} value={version}>
                  {version}
                </Option>
              ))}
            </Select>
          </FormItem>
        </Col>
        <Col span={12} offset={1}>
          {/* MySQL version */}
          <FormItem
            name="mysql"
            label={
              <FormattedMessage
                id="issue.mysql"
                defaultMessage="MySQL Version"
              />
            }
            help={
              <FormattedMessage
                id="issue.mysqlHelp"
                defaultMessage="MySQL version..."
              />
            }
          >
            <Select showSearch={true}>
              {mysqlVersion.map(m => (
                <Option key={m.version} value={m.version}>
                  {m.version}
                </Option>
              ))}
            </Select>
          </FormItem>
        </Col>
      </Row>
    </Form.Item>

    <FormItem
      name="steps"
      rules={[{ required: true }]}
      label={
        <FormattedMessage id="issue.steps" defaultMessage="Step to reproduce" />
      }
      help={<I18n id="stepsHelp" />}
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="expected"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.expected"
          defaultMessage="What is expected?"
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="actual"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.actually"
          defaultMessage="What is actually happening?"
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="extra"
      label={
        <FormattedMessage
          id="issue.extra"
          defaultMessage="Any additional comments?(optional)"
        />
      }
      help={
        <FormattedMessage
          id="issue.extraHelp"
          defaultMessage="e.g. some background/context of how you ran into this bug."
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
  </div>
);

export default BugForm;
