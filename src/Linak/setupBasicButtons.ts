import { IMQTTConnection } from '@mqtt/IMQTTConnection';
import { IController } from 'Common/IController';
import { buildCommandButton } from 'Common/buildCommandButton';
import { Commands } from './Commands';

export const setupBasicButtons = (mqtt: IMQTTConnection, controller: IController<number[]>) => {
  buildCommandButton('Linak', mqtt, controller, 'MassageAllUp', Commands.BasicAllUp);
  buildCommandButton('Linak', mqtt, controller, 'MassageAllDown', Commands.BasicAllDown);

  buildCommandButton('Linak', mqtt, controller, 'MassageHeadUp', Commands.BasicHeadUp);
  buildCommandButton('Linak', mqtt, controller, 'MassageHeadDown', Commands.BasicHeadDown);

  buildCommandButton('Linak', mqtt, controller, 'MassageFootUp', Commands.BasicFootUp);
  buildCommandButton('Linak', mqtt, controller, 'MassageFootDown', Commands.BasicFootDown);
};
