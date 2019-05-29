import * as React from 'react';

export type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';

export interface HttpRequestHeader {
  [key: string]: string;
}

export interface RcFile extends File {
  uid: string;
  lastModifiedDate: Date;
}

export interface UploadFile extends File {
  uid: string;
  size: number;
  readonly name: string;
  fileName?: string;
  readonly lastModified: number;
  readonly lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File;
  response?: any;
  error?: any;
  linkProps?: any;
  type: string;
  readonly webkitRelativePath?: string;
}

export interface UploadChangeParam<T extends object = UploadFile> {
  // https://github.com/ant-design/ant-design/issues/14420
  file: T;
  fileList: Array<UploadFile>;
  event?: { percent: number };
}

export interface ShowUploadListInterface {
  showRemoveIcon?: boolean;
  showPreviewIcon?: boolean;
}

export interface UploadLocale {
  uploading?: string;
  removeFile?: string;
  uploadError?: string;
  previewFile?: string;
}

export type UploadType = 'drag' | 'select';
export type UploadListType = 'text' | 'picture' | 'picture-card';

type PreviewFileHandler = (file: File | Blob) => PromiseLike<string>;

export interface UploadProps {
  type?: UploadType;
  name?: string;
  defaultFileList?: Array<UploadFile>;
  fileList?: Array<UploadFile>;
  action?: string | ((file: UploadFile) => string) | ((file: UploadFile) => PromiseLike<string>);
  directory?: boolean;
  data?: Object | ((file: UploadFile) => any);
  headers?: HttpRequestHeader;
  showUploadList?: boolean | ShowUploadListInterface;
  multiple?: boolean;
  accept?: string;
  beforeUpload?: (file: RcFile, FileList: RcFile[]) => boolean | PromiseLike<any>;
  onChange?: (info: UploadChangeParam) => void;
  listType?: UploadListType;
  className?: string;
  onPreview?: (file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void | boolean | Promise<void | boolean>;
  supportServerRender?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  prefixCls?: string;
  customRequest?: (option: any) => void;
  withCredentials?: boolean;
  openFileDialogOnClick?: boolean;
  locale?: UploadLocale;
  id?: string;
  previewFile?: PreviewFileHandler;
}

export interface UploadState {
  fileList: UploadFile[];
  dragState: string;
}

export interface UploadListProps {
  listType?: UploadListType;
  onPreview?: (file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void | boolean;
  items?: Array<UploadFile>;
  progressAttr?: Object;
  prefixCls?: string;
  showRemoveIcon?: boolean;
  showPreviewIcon?: boolean;
  locale: UploadLocale;
  previewFile?: PreviewFileHandler;
}
