export type NoteProps = {
  title: string;
  bodyText: string;
  date: string;
  id: number;
  category?: string;
};

export type CategoryItemProps = {
  title: string;
  categoryItemNumbers?: number;
  id?: number;
  category?: string;
};
