import { IsNotEmpty } from 'class-validator';
import { IsUUID, Length } from 'class-validator/types/decorator/decorators';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 248)
  content: string;

  @IsNotEmpty()
  category: string;
}
