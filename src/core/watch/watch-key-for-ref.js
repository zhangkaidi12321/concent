import pickDepFns from '../base/pick-dep-fns';
import findDepFnsToExecute from '../base/find-dep-fns-to-execute';
import { CATE_REF } from '../../support/constant';

export default function (ref, stateModule, oldState, committedState, callInfo, isBeforeMount, autoMergeDeltaToCommitted = false) {
  const refCtx = ref.ctx;
  if (!refCtx.hasWatchFn) return true;

  const deltaCommittedState = Object.assign({}, committedState);
  const { watchDep, module: refModule, ccUniqueKey, refComputed } = refCtx;
  const newState = Object.assign({}, oldState, committedState);

  const curDepComputedFns = (committedState, isBeforeMount) => pickDepFns(isBeforeMount, 'ref', 'watch', watchDep, stateModule, oldState, committedState, ccUniqueKey);
  // 触发有stateKey依赖列表相关的watch函数
  const { shouldCurrentRefUpdate, hasDelta } = findDepFnsToExecute(
    ref, stateModule, refModule, oldState, curDepComputedFns,
    committedState, newState, deltaCommittedState, callInfo, isBeforeMount,
    'watch', CATE_REF, refComputed,
  );

  if (autoMergeDeltaToCommitted && hasDelta) {
    Object.assign(committedState, deltaCommittedState);
  }

  return shouldCurrentRefUpdate;
}