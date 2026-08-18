import { useState } from "react";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

const ModalPage = () => {
  const [lightModal, setLightModal] = useState(false);
  const [darkModal, setDarkModal] = useState(false);
  const [outlineModal, setOutlineModal] = useState(false);

  const usageCode = `import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

const [lightModal, setLightModal] = useState(false);
const [darkModal, setDarkModal] = useState(false);
const [outlineModal, setOutlineModal] = useState(false);

<Button className="mr-4" variant="primary" onClick={() => setLightModal(true)}>Light Modal</Button>
<Modal variant="light" size="sm" isOpen={lightModal} onClose={() => setLightModal(false)}>
  <h2 className="text-lg font-semibold">Modal Title</h2>
  <p>This is modal content.</p>
</Modal>

<Button className="mr-4" variant="dark" onClick={() => setDarkModal(true)}>Dark Modal</Button>
<Modal variant="dark" size="sm" isOpen={darkModal} onClose={() => setDarkModal(false)}>
  <h2 className="text-lg font-semibold">Modal Title</h2>
  <p>This is modal content.</p>
</Modal>

<Button className="mr-4" variant="outline" onClick={() => setOutlineModal(true)}>Outline Modal</Button>
<Modal variant="outline" size="sm" isOpen={outlineModal} onClose={() => setOutlineModal(false)}>
  <h2 className="text-lg font-semibold">Modal Title</h2>
  <p>This is modal content.</p>
</Modal>
`;

  const propsData = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "false",
      description: "Controls modal visibility",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "outline"',
      default: '"light"',
      description: "The visual style variant of the Modal",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "-",
      description: "Callback when modal closes",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Content inside the modal",
    },
  ];

  return (
    <div className="w-full max-w-none p-4 md:p-6 space-y-12 overflow-visible h-auto flex-1">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Modal
        </h1>
        <p className="text-xl text-gray-600">
          The Modal component is used to display content in an overlay.
        </p>
      </div>

      <section className="space-y-4 w-full">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          Usage
        </h2>
        <ComponentDemo code={usageCode}>
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              variant="primary"
              onClick={() => setLightModal(true)}
            >
              Light Modal
            </Button>
            <Modal
              variant="light"
              size="sm"
              isOpen={lightModal}
              onClose={() => setLightModal(false)}
            >
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <p>This is modal content.</p>
            </Modal>

            <Button
              variant="dark"
              onClick={() => setDarkModal(true)}
            >
              Dark Modal
            </Button>
            <Modal
              variant="dark"
              size="lg"
              isOpen={darkModal}
              onClose={() => setDarkModal(false)}
            >
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <p>This is modal content.</p>
            </Modal>

            <Button variant="outline" onClick={() => setOutlineModal(true)}>
              Outline Modal
            </Button>
            <Modal
              variant="outline"
              size="sm"
              isOpen={outlineModal}
              onClose={() => setOutlineModal(false)}
            >
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <p>This is modal content.</p>
            </Modal>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4 w-full">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default ModalPage;