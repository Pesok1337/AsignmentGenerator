import { ControlType } from "./control-type.model";
import { OrgUnit } from "./org-unit.model";
import { ProductGroup } from "./product-group.model";
import { TaskFreq } from "./task-freq.model";

export interface ControlTaskRecord {
    id: number;
    controlType: ControlType;
    sampleType: string; // Пока оставим как строку
    orgUnit: OrgUnit;
    organization: string; // Пока оставим как строку
    productGroup: ProductGroup;
    taskFreq: TaskFreq;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    description: string;
  }
  