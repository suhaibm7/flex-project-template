import * as Flex from '@twilio/flex-ui';

type FlexUIAttributes = Flex.ServiceConfiguration["ui_attributes"];

// feature: activity-skill-filter
export type ActivitySkillFilterRule = {
  required_skill: string,
  sort_order: number
}

export type ActivitySkillFilterRules = {
  [key: string]: ActivitySkillFilterRule
}

export interface UIAttributes extends FlexUIAttributes {

  custom_data: {
    serverless_functions_domain: string;
    features: {
    }
  }
}
