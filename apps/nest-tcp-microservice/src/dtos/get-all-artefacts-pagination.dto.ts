import {
  IsNumber,
  IsPositive,
  IsOptional,
  IsString,
  IsEnum,
  IsBoolean,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { SortValue } from '../types/app.type';

export class GetAllArtefactsPaginationDto {
  @IsNumber({}, {})
  @Type(() => Number)
  @IsPositive({})
  page?: number;

  @IsNumber({})
  @Type(() => Number)
  @IsPositive({})
  limit?: number;

  @IsOptional()
  @IsString({})
  @IsEnum(SortValue, {})
  sortValue?: SortValue;

  @IsOptional()
  @IsString({})
  sortFields?: string;

  @IsOptional()
  @IsString({})
  startDate?: string;

  @IsOptional()
  @IsString({})
  endDate?: string;

  @IsOptional()
  @IsString({})
  lastItemId?: string;

  @IsOptional()
  @IsBoolean({})
  @Transform(
    ({ value }): boolean => value === 'true' || (value !== 'false' && value)
  )
  isActive?: boolean;

  @IsOptional()
  @IsBoolean({})
  @Transform(
    ({ value }): boolean => value === 'true' || (value !== 'false' && value)
  )
  isDeleted?: boolean;

  @IsOptional()
  @IsString({})
  @Transform(({ value }): string => {
    return (value as string)
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .split(' ')
      .filter((word) => word !== '')
      .join('|');
  })
  searchText?: string = '';
}
