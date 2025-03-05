// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m2ufZZmzM3vYrft7FjXvKN
// Component: ZntZdkCGK9cH

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: m2ufZZmzM3vYrft7FjXvKN/projectcss
import sty from "./PlasmicNavigationBar.module.css"; // plasmic-import: ZntZdkCGK9cH/css

createPlasmicElementProxy;

export type PlasmicNavigationBar__VariantMembers = {};
export type PlasmicNavigationBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavigationBar__VariantsArgs;
export const PlasmicNavigationBar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavigationBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavigationBar__ArgsType;
export const PlasmicNavigationBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavigationBar__OverridesType = {
  root?: Flex__<typeof NavigationBar>;
};

export interface DefaultNavigationBarProps {
  className?: string;
}

const $$ = {};

function PlasmicNavigationBar__RenderFunc(props: {
  variants: PlasmicNavigationBar__VariantsArgs;
  args: PlasmicNavigationBar__ArgsType;
  overrides: PlasmicNavigationBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__qgEbi
          )}
          href={`/`}
          platform={"react"}
        >
          {"Anna.Design"}
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__eV9Oc)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__wuhlN
            )}
            href={"/#services"}
            platform={"react"}
            role={"menuitem"}
          >
            {"Services"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__pgpCs
            )}
            href={"/#work"}
            platform={"react"}
            role={"menuitem"}
          >
            {"Work"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___7Aq9
            )}
            href={"/#about"}
            platform={"react"}
            role={"menuitem"}
          >
            {"About"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___5XJxa
            )}
            href={"/#contact"}
            platform={"react"}
            role={"menuitem"}
          >
            {"Contact"}
          </PlasmicLink__>
        </React.Fragment>
      }
      openButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__rdcyC)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavigationBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigationBar__VariantsArgs;
    args?: PlasmicNavigationBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavigationBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavigationBar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavigationBar__ArgProps,
          internalVariantPropNames: PlasmicNavigationBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavigationBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigationBar";
  } else {
    func.displayName = `PlasmicNavigationBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigationBar = Object.assign(
  // Top-level PlasmicNavigationBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavigationBar
    internalVariantProps: PlasmicNavigationBar__VariantProps,
    internalArgProps: PlasmicNavigationBar__ArgProps
  }
);

export default PlasmicNavigationBar;
/* prettier-ignore-end */
