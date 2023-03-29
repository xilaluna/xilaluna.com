/// <reference types="node" />
import type { OutputFormat } from '../../../types.js';
import type { Operation } from './image.js';
export declare function processBuffer(buffer: Buffer, operations: Operation[], encoding: OutputFormat, quality?: number): Promise<Uint8Array>;
