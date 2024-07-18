import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, SchemaTypes, HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, collection: 'artefacts' })
export class Artefact {
  _id: Types.ObjectId;

  @Prop({
    type: SchemaTypes.String,
    required: [true, 'Title  is required'],
    trim: true,
  })
  title: string;

  @Prop({
    type: SchemaTypes.String,
    unique: [true, 'Duplicate Accession number found'],
    required: [true, 'Accession number is required'],
  })
  accessionNo?: string;

  @Prop({ type: SchemaTypes.String })
  credit?: string;

  @Prop({ type: SchemaTypes.String })
  placeOfOrigin?: string;

  @Prop({ type: SchemaTypes.String })
  originYear: string;

  @Prop({ type: SchemaTypes.String })
  dimensions?: string;

  @Prop({ type: SchemaTypes.String })
  medium: string;

  @Prop({ type: SchemaTypes.String })
  description?: string;

  @Prop({ type: SchemaTypes.Mixed })
  metaData: unknown;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  isActive: boolean;

  @Prop({ type: SchemaTypes.Boolean, default: true })
  isDownload: boolean;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  isPrivateView: boolean;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  isPinned: boolean;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: SchemaTypes.Array, default: [] })
  keyword: string[];
}

/**
 * @ignore
 */
export const ArtefactSchema = SchemaFactory.createForClass(Artefact);
export type ArtefactDocument = HydratedDocument<Artefact>;
